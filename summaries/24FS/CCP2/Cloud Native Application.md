# Cloud Native Application

> A cloud native application is an application optimised for running in the cloud (IaaS or PaaS). A cloud native application exploits all cloud computing principles.
>
> The principal goal is to exploit the economic value proposition of cloud computing, e.g. having fast life-cycles. To do this, each phase in the life-cycle of the application needs to be optimised for running in a cloud environment. Typically, cloud native apps are distributed systems.

The following diagram shows the life-cycle of a cloud application:

![image-20240313080605310](./res/Cloud%20Native%20Application/image-20240313080605310.png)

*(The difference between deployment and provisioning is that deployment deploys it on the hardware, but the service isn't yet available to the user. When provisioned, the service is actually accessible)*

The following 

* **Architecture**: cloud native application nneeds to be designed for scalability and resilience (if one service goes down, another one can take over). This favours a service oriented architecture (e.g. micro-services)
* **Organisation**: Teams need to be (re-)organised around business capabilities (like a feature). This means the DB engineer and the front-end dev are working on the same team if they are working on the same feature
* **Process**: There needs to be automated software development, deployment and management pipeline

## Service Oriented Architecture (SOA)

SAO Principles:

* standardised protocols (e.g. SOAP, REST, ...)
  How the services inter-opt with each other
* abstraction
  A service should hide its internal structure and only provide a defined API-surface
* Loose coupling
* Reusability
* Composability
* Stateless service
  The state of an service should **never** be stored in the service itself. Instead, it should be stored in a DB, or other service.
* Discoverable service
  A service should be discoverable via a mechanism

### Micro-Services

The micro-service architecture is a SOA architectural style with some additional points:

* Each service is "small" and dedicated to one thing (small doesn't necessary mean not a lot of code, but it should be hyper-focused on one thing)
* Each service runs in its own process and can manage itself (self-composed in its own process)
* Each service is communicating with lightweight (e.g. simple and easy) mechanisms (e.g. REST APIs)
* Each service can be deployed independently in a fully automatic way
* Minimal centralised management of the services is required

On the left side, a monolithic application is depicted. All features are packed into one process and it scales by replicating the entire application. On the right side, a micro-service architecture is shown and each individual service can be scaled independently of each other.

![image-20240313083033756](./res/Cloud%20Native%20Application/image-20240313083033756.png)

The following shows the difference between a application implemented as a monolith and as a micro-service architecture. 

<img src="./res/Cloud%20Native%20Application/image-20240313083239719.png" alt="image-20240313083239719" style="zoom:33%;" />

### Conway's Law

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.

If an organisation is split into UI specialists, middleware specialits and DB admins, the application also reflects that structure. This is burdensome, as simple changes require cross-team approval.

![image-20240313083618165](./res/Cloud%20Native%20Application/image-20240313083618165.png)

In the (micro)service approach, each team is split along features (business capabilities). A team member can belong to multiple teams. Importantly, teams are cross-functional. Additionally, a team shouldn't be larger than how many people can be fed by two pizzas.

![image-20240313083729634](./res/Cloud%20Native%20Application/image-20240313083729634.png)

## CNA Principles

The following principles where developed by Heroku in 2011. See https://12factor.net/

### Codebase

<img src="./res/Cloud%20Native%20Application/image-20240313084257003.png" alt="image-20240313084257003" style="zoom:50%;" />

One codebase tracked in revision control, many deploys. Importantly, the same code base is used for each customer.

### Dependencies

**All** dependencies are **explicitly** declared and are isolated (both are required). Thus the application **cannot** depend on system-wide dependencies. This simplifies the setup and avoids sudden surprises when external dependencies inevitable change.

Dependencies can be specified with different tools:

* Java: pom.xml for dependencies and the JVM for the isolation
* C: autoconf for dependencies and static linking for isolation
* In general: Dockerfiles for dependencies and container-images for isolation
* Alternatively, build automation (ansible, ...) for dependencies and VM images for isolation

In general, wildcard declarations should be avoided at all cost.

### Config

### Backing Services

### Build, Release, Run

### Processes

### Port Binding

### Concurrency

### Disposability

### Dev/Prod Parity

### Logs

### Admin Processes