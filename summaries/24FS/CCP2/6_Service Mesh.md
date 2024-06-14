# Service Mesh

![image-20240327082503467](./res/Service%20Mesh/image-20240327082503467.png)

The idea behind a service mesh, is to implement the cross-cutting concerns (CCC) in a proxy, while keeping the actual services free from them.

The incoming and outgoing requests are transparently routed through the proxies. This builds the **data plane**. Often the proxies in the data plane intercept the traffic from the services, handle traffic between the services, execute policies from the control plane and collect service metrics and send them to the control plane.

Additionally, a service mesh adds a **control plane**, which distributes configuration updates to all proxies and receives mettrics collected by the proxies for further processing (kubernetes' master is in a way a control plane). Often, one can manage policies, injects and controls the CCC proxies and collect metrics and logs.

The diagram below shows the control plane and data plane working together.

![image-20240327083001514](./res/Service%20Mesh/image-20240327083001514.png)

Traffic between the proxies is often called "east-west traffic", while the traffic between the control plane and data plane is called "north-south traffic".

## Pros & Cons of a Service Mesh

Pros:

*  Cross-cutting features are implemented outside microservice code, and they are reusable.
* Solves most of the problems in Microservices architecture which we used to have ad-hoc solutions: Distributed tracing, logging, security, access control etc.
* More freedom when it comes to selecting a microservice implementation language: You don’t need to worry about whether a given language supports or has libraries to build network application functions.

Cons:

* Complexity: Having a service mesh drastically increases the number of runtime instances that you have in a given microservice implementation.
* Adding extra hops: Each service call has to go through an extra hop (through service mesh sidecar proxy).
* Service Meshes address a subset of problems: Service mesh only addresses a subset of inter-service communication problems, but there are a lot of complex problems such as complex routing, transformation/type mapping, integrating with other services and systems, to be solved at your microservice’s business logic.
* Immature: Service mesh technologies are relatively new to be declared as full production ready for large-scale deployments

## Downsides of Microservices

### Wrong Assumptions when writing Microservices

1. The network is reliable
2. Latency is zero
3. Bandwidth is infinite
4. The network is secure
5. Topology does not change
6. There is one administrator
7. Transport cost is zero
8. The network is homogeneous (same devices; all managed in the same way; only one configuration is needed)

### Challenges of Microservice Architecture

![image-20240327081028361](./res/Service%20Mesh/image-20240327081028361.png)

**Network resilience / Traffic management**  
A service might become a bottleneck. This can be managed by network policies quotes and rate limits for all services. This ensures that one rogue service doesn't make too many calls and overloads the other services or the network.

Thus, *to effectively control services, create policies that specify which service can and can't make calls*

**Security**  
Microservices need to authenticate, authorise and encrypt communication.  In comparison to microservices, in a monolith, function-to-function calls in the monolith are secure by default.

Thus, *additional auditing tools are needed to trace the service-to-service communication.*

**Observability**  
In a monolith, logs are sufficient to trace what the application is doing. 

However, in a microservice-architecture, this doesn't work nearly as well. Latency, errors and failures can happen in any service within the architecture. Following a call through the different services, isn't a simple task.

Thus, *developers need logging, network metrics and distributed tracing and topology to investigate problems and pinpoint their location.*

**Exponential growth of complexity**  
Naturally, the bigger the architecture gets and the more services there are, the more complex these problems become. 

### Cross-cutting Concerns

The ramifications from the issues from above are all cross-cutting concerns. These cross-cutting concerns can be implemented in of the following ways:

* Use libraries (e.g. Netfix's eureka service registry, frameworks, ...)
  Since, there is limited interoperability between languages, often a uniform environment (only spring, or only .NET) is used  
  ![image-20240327081959632](./res/Service%20Mesh/image-20240327081959632.png)

* A second approach is to outsource the cross-cutting concerns to a proxy. This creates a language independent "library", freeing you from having to have a homogeneous environment.

  ![image-20240327082022715](./res/Service%20Mesh/image-20240327082022715.png)

## Istio

![image-20240327101916984](./res/Service%20Mesh/image-20240327101916984.png)

Istio is an open-source implementation of the service mesh originally developed by IBM, Google, and Lyft

![image-20240327083844603](./res/Service%20Mesh/image-20240327083844603.png)

The diagram above shows how the Istio service mesh is implemented. Istio uses the envoy proxy on each pod as the proxy.

Below one can see how Istio integrates with Kubernetes:

![image-20240327084505749](./res/Service%20Mesh/image-20240327084505749.png)

### Control Plane

The control plane of Istio is implemented in one deamon and contains the following functionality:

* Pilot  
  Service discovery, managing routing and resilience rules, traffic management (routing, ingress, A/B tests, canary rollouts), Resilience (timeout, retry, circuit breaker, ...) and platform adapters (to integrate into Kubernetes, ...)
* Citadel  
  Handels the security between services, but also for the end-user. Furthermore credentials and certificate management was handled by citadel
* Galley  
  Configuration management and injection

### Traffic Management

![image-20240327090220160](./res/Service%20Mesh/image-20240327090220160-1711526542483-2.png)

A large part of what a service mesh is doing is traffic routing. Thus, there are a lot of traffic management features:

* Basic load balancing
* AB-Testing (with weighted routing)
* Canary rollouts
  This provides a more finer grained traffic distribution than what kubernetes provides (See  [Operation](13_Operation.md))
* Failure Handling  
  A lot of behaviour around failure handling can be configured within the traffic management part of Istio.
  * Timeouts
  * Rate / Bandwidth limiting
  * Circuit Breaker
  * Retry
  * Health Checks
* Fault injections  
  Istio can inject failures, such as delays (e.g. network latency) or outright failures (HTTP error codes, TCP connection failure). This simulates failures on the network and tests how resilient the service mesh is.

Istio defines a concept called "Virtual Service". Rules, such as traffic rules, can then be specified on the virtual service. The following shows an example of a virtual service:

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: apache
spec:
  hosts:
    - "*"
  gateways:
    - microservice-gateway
  http:
    - match:
        - uri:
            prefix: /
      route:
        - destination:
            port:
              number: 80
            host: apache
```

Furthermore, Istio has a concept of a "Gateway", which describes, on which port and which address a service should be accessible. Then, a virtual service registers itself on a gateway to "receive" requests through that gateway 

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: microservice-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
    - port:
        number: 80
        name: http
        protocol: HTTP
      hosts:
        - "*"
```

The following diagram is an example of weighted routing. 50% of the traffic is routed to `v2` and 50% to `v3`. This allows a company to check if a new version is running as expected.

![image-20240327090653314](./res/Service%20Mesh/image-20240327090653314.png)

### Observability

Istio generates detailed telemetry and can send those to information panels, such as Grafana, Jaeger, or Prometheus.

<img src="./res/Service%20Mesh/image-20240327091204247.png" alt="image-20240327091204247" style="zoom:40%;" />

### Security

Istio does automatic service-to-service encryption, in addition to allowing for easy configuration for end-to-end security.

<img src="./res/Service%20Mesh/image-20240327091259772.png" alt="image-20240327091259772" style="zoom:40%;" />

## Kernel-based "Service Mesh" technology

A downside of sidecar-based service meshes is that an intermediate layer is inserted between the network stack and the microservices. This adds complexity and is another process on the CPU.

An alternative is to implement this as part of the network stack. This means no extra process is needed and less resources and context switches are required.

This can be achieved on Linux with eBPF (enhanced Berkeley Packet Filter), which provides the ability to run JIT compiled bytecode in a sandboxed environment in kernel mode.

![image-20240327091816685](./res/Service%20Mesh/image-20240327091816685.png)

eBPF can run code in various kernel modules (such as file system and the network stack).

### Cilium

Cilium is an example of a eBPF-based service mesh. It connects to an eBPF component in the Linux kernel.

![image-20240327092113341](./res/Service%20Mesh/image-20240327092113341.png)

## Service Mesh Interface (SMI)

The goal is to provide a standard interface for service meshes on Kubernetes. This would allow configuring basic features in an agnostic way to the actual service mesh implementation.