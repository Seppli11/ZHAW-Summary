# DevOps

When developing software, the current expectation is to deliver continuously. This shortens the feedback loop and the time until money is earned. Another benefit of continuous is the minimisation of risk. Since the delivery process is automated, it is also at least somewhat documented.

## Problems with Waterfall

Often times, the later stages of delivery (e.g. testing and operation) is still done with a waterfall model. The following problems can arise from this.

There is also a conflict of interests between business/development and the operation team. 

![image-20240424081521209](./res/DevOps/image-20240424081521209.png)

Another problem can be "The Wall of Confusion". The separation between development and operations means that sometimes code that works in development, doesn't in production. 

![image-20240424081647007](./res/DevOps/image-20240424081647007.png)

This can be solved by integrating the operation teams into the development cycle.

## DevOps Steps

![image-20240424082820978](./res/DevOps/image-20240424082820978.png)

At each stage, automation can be implemented. A step can continue to the next step, when all tests pass. If a test fails, the responsible people are notified, thus creating a feedback loop.

* Build automation  
  A process building individual components, run unit tests, package software, create documentation, ... This is typically run by the developer on their local machine. Usually, the tools used are provided by the programming language used (make for c/c++, maven/gradle for java, ...).
* Continuous Integration  
  Automatically build, test and integrate components and run integration tests. This is typically run on a server
  ![image-20240612141921943](./res/10_DevOps/image-20240612141921943.png)
* Continuous Delivery  
  Automatically create releases, deploy them to the staging environment and run automatic acceptance tests (like stress test, load tests, ...). The steps before deploying to production are automated, however, the final step is still manually done
* Continuous Deployment  
  Adds automatically deploying and provisioning to production
* DevOps  
  The production system is operated automatically (config management, infrastructure provisioning, backup, monitoring, ...)

The difference between continuous delivery and continuous deployment, is that in continuous delivery there is a human in the loop who presses a big red button when delivering a release. In continuous deployment this is automated. Continuous deployment is used by very few companies since it requires a lot of trust in their tests.

## Multi-Stage Delivery Environment

![image-20240424083142172](./res/DevOps/image-20240424083142172.png)

* development environment *(grey)*  
  An environment for each developer/team used for development
* test environment *(blue)*  
  An environment, close to the production environment, for running integration, functional and performance tests. 
* stage environment *(green)*  
  An exact copy of the production environment to run acceptance and operational tests. With this environment, the deployment process and scaling is also tested. The staging environment should ideally be about the same size of the production environment to test how the system scales properly.
* production environment *(red)*

![image-20240424084557400](./res/DevOps/image-20240424084557400.png)

The diagram above shows how information flows through a multi-stage environment. To note is that each stage after the dev stage uses the same artefacts. 

## Best Practices

* Code and config changes **always** go to version control
* Binary artefacts are only built once and are used in all environment
* Different configs are used to support multiple environments
* The same tooling is used across all environment

## Tools Required

<img src="./res/DevOps/image-20240424085932872.png" alt="image-20240424085932872" style="zoom: 60%;" />

* Version Control
* Artifact Repository (e.g. nexus)
* Build Server
* Automation Agent (Chef, Ansible, ...)
* Monitoring Infrastructure (ElasticSearch-Logstash-Kibana, Splunk, ...)
* Secure Store (HashiCorp Vault)

## Tekton Tool

Tekton is built on top of kubernetes. Pipelines are described with custom kubernetes resource descriptions.

Each pipeline consist of tasks, whereas each tasks consists of steps. Each step runs in a specified container image. Once all steps are run, the task is completed and the flow continues to the next task. Of course, a task has outputs which can be forwarded to inputs of other tasks. Additionally, parameters can also be passed to pipelines.

<img src="./res/DevOps/image-20240424090821747.png" alt="image-20240424090821747" style="zoom: 50%;" />

To actually run a pipeline, one needs a `pipeline-run`, which is an additional resource. The `pipeline-run` specifies what the triggers of the pipeline are (or if it is a manual pipeline-run).

![image-20240424090559275](./res/DevOps/image-20240424090559275.png)

*(careful, a task needs to specify which tasks should be run afterwards with `runAfter`)*

## Argo CD

<img src="./res/DevOps/image-20240424091748947.png" alt="image-20240424091748947" style="zoom:50%;" />

Argo CD does continuous delivery. It monitors a deployment configuration in git. If this config changes, the new config is applied to the cluster. Similarly, it might also be triggered by a CI tool (like jenkins,...) or manually.

## GitOps

Principles:

* Declarative  
  A system must have its desired state expressed declaratively
* Versioned and Immutable  
  A desired state is stored immutable, versioned and retains a complete version history (e.g. git)
* Pulled automatically  
  The software agent automatically pulls the desired state
* Continuously Reconciled *(abgeglichen)*  
  The agent monitors the actual system and applies the new desired state (e.g. kubernetes)

### Push vs Pull-based Deployments

![image-20240612152643892](./res/10_DevOps/image-20240612152643892.png)

In a push-based GitOps platform (e.g. Jenkins, CircleCI, Tekton, ...) a build pipeline builds and pushes a build to a registry and triggers a deployment of that build.

![image-20240612152649540](./res/10_DevOps/image-20240612152649540.png)

On the other hand, in a pull-based platform, the build pipeline still pushes a build to  a registry. Furthermore, the environment/config repository is updated. The operator continuously observes the registry and when noticing a change, the change is applied.