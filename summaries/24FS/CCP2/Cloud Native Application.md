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

## CNA Principles (12 Factor)

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

Everyting that's like to change between deployments should be stored in an external configuration, and **not** configured in the code.

This likely includes:

* Resources, like databases and other backing services
* Credentials to external services (e.g. Amazon S3, Twitter, ...)
* Per-deploy values (e.g. canonical hostname, ...)

This configurations are strictly separated from the code and are injected into the environment. 12-Factor recommends doing this with environment variables, since they are easy to change without changing code, and they are unlikely to be checked into a repository.

### Backing Services

<img src="./res/Cloud%20Native%20Application/image-20240313090257284.png" alt="image-20240313090257284" style="zoom:40%;" />

Backing services should be treated as an attached resource and needs to be configurable as an URL. Importantly, no distinction is made between local and third-party services. 

A backing service is any service the app consumes over the network during its normal operation (DB, messing, SMTP server, cache...)

### Build, Release, Run

<img src="./res/Cloud%20Native%20Application/image-20240313091053554.png" alt="image-20240313091053554" style="zoom:30%;" />

Building, releasing and running are separated stages. This enables building the image once, then putting it into testing. After testing, the image can be put into production.

*This is mostly an artifact of the time, when it was common to directly upload files to the production server.*

### Processes

Services (processes) are stateless and share nothing.

* A service never assumes that anything is cached in memory or on disk will be available on a future request. This enables that a request can go to any instance, since the instance didn't cache anything
* Any persistent data must be stored in a stateful backing service

### Port Binding

A service is completely self-contained and does not rely on the present of a webserver in the environment.

A service can become the backing service for another app. Then the backing service's URL is provided to the service using the service.

<img src="./res/Cloud%20Native%20Application/image-20240313091429128.png" alt="image-20240313091429128" style="zoom:50%;" />

### Concurrency

<img src="./res/Cloud%20Native%20Application/image-20240313091718156.png" alt="image-20240313091718156" style="zoom:33%;" />

Each server can scale individually and horizontally (adding more instances).

### Disposability

A service needs to be able to start and stop at any time. When receving a termination signal (e.g. SIGTERM), resources should be freed, the service should unsubscribe from message channels and more.

Additionally, the app should be robust against sudden death, in the case of a failure of the underlying hardware.

### Dev/Prod Parity

Development, staging and production environment should be as similar as possible. This enables effective continuous delivery and deployment and avoid gaps between development and production.

* Avoid time gap: Write code and have it deployed in hours
* Avoid personnel gap: developers who wrote code are closely involved in deploying it and watching its behaviour in production
* Avoid tool gap: Use the same tools in development and production

### Logs

Logs should be treated as event streams.

A service should never concern itself with routing or storage of its log output stream. Instead, the environment captures the logs and collated them together for viewing and for long-term archival.

### Admin Processes

Management tasks (e.g. deployment or modifying DB structure) are executed as a one-off service and not part of the long-running services. Thus, services don't do migration not them self, since this could lead to disaster when the other replicas still require the old DB structure.

These tasks should be tested on a copy of the environment with the same release, codebase and config.