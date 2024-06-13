# Cheat Sheet

## Kubernetes

### `kubectl get`

`kubectl [-n <namespace>] get <obj> [-o wide] `,

where `<obj>` can be:

* `all` returns all objects
* `pods`
* `services`
* `secrets`

`-o wide` prints more details

### `kubectl describe`

Describes the given object

`kubectl describe <object-type> <name>`

, where `<object-type>` is the type (e.g. `pod`, `service`, ...) and the `<name>` is the name

### `kubectl logs <pod>`

`kubectl logs [-f] [-p] <pod>`

Returns the logs of the given pod

* `-f` follows the log
* `-p` also returns the logs of the previous instance

### `kubectl rollout restart <deployments>`

Restarts the given deployments in a rolling fashion.

### `kubectl create secret`

`kubectl create secret generic <name> [--from-literal=<key>=<value>] [-o yaml] [--dry-run]` 

Creates a new secret with the `<name>` and the given key value. `--from-literal=...`  can be supplied multiple times.

When adding `-o yaml`, the secrete is outputted as yaml. When appending `--dry-run`, the command is only simulated and doesn't have a lasting effect. 

Secrets can be viewed by typing `kubectl describe secrets <name>`. The outputted values are stored in base64 and can be decoded with `echo <base64 value> | base64 --decode`

### `kubectl delete secret <secret-name>`

Deletes a secret with the given name

### `kubectl create configmap <name> [--from-file=<path>]`

Creates a new config map with the given name. If `--from-file=<path>` is appended, the value of the config map is read from the given file.

A config map can be retrieved with `kubectl get configmap <name> -o yaml`.

### `kubectl port-forward <service/pod> [-n <namespace>] <external-port>:<internal-port>`

Forwards the `<external-port>` to the `<internal-port>` of the given pod or service

`kubectl port-forward svc/argocd-server -n argocd 8443:443`

### `kubectl scale deployment <deployment-name> --replicas=<replica nr>`

Allows for modifying the number of replicas in a deployment.

### `kubectl exec <pod name> -- <cmd>`

Executes a command in the given pod.

### Kubernetes YAML File

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: order-deployment
    version: "1.0"
  name: order-deployment-name
spec:
  replicas: 1
  selector:
    matchLabels:
      app: order-pod
  strategy: {}
  template:
    metadata:
      labels:
        app: order-pod
    spec:
      containers:
      - name: order
        image: registry.localhost:5000/ccp2-order:1
        imagePullPolicy: Always
        ports:
        - containerPort: 8081
        resources: {}
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: order-service
  name: order-service-name
spec:
  type: ClusterIP
  ports:
  - port: <externalPort>
    protocol: TCP
    targetPort: <containerPort>
    name: http
  selector:
    app: order-pod
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: order-ingress-name
  labels:
    name: order-ingress
spec:
  rules:
  - host: order.160.85.253.<X>.nip.io
    http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: order-service
            port:
              number: 80

```

## K3D

### `k3d cluster create`

To create a cluster:

`k3d cluster create --config <path-to-config.yaml> `

With `kubectl cluster-info` one can verify, if the cluster was correctly setup.

### `k3d cluster delete`

This deletes a cluster

`k3d cluster delete [--all]`

## buildpack

### `pack build`

`pack build <image-tag> --path <app-folder-path> --builder paketobuildpacks/builder-jammy-tiny`

`pack build ccp2-order:1 --path ./microservice-order --builder paketobuildpacks/builder-jammy-tiny`

## Helm

### `helm repo add`

Adds a repository 

* `helm repo add <name> <url>`
* `helm repo add bitnami https://charts.bitnami.com/bitnami`

### `help search [repo|hub] <what>`

Searches for a chart

### ` helm install [<name>] <chart-name> [--generate-name]`

Installs the given chart.

To install a chart, either a name has to be given explicitly or `--generate-name`  has to be set.

* `helm install bitnami/mysql --generate-name`
* `helm install test-mysql bitnami/mysql`

### `helm show (chart|readme|values) <chart>`

Shows either the chart, readme file or values of the given chart.

*  `helm show chart bitnami/mysql`
* `helm show readme bitnami/mysql`
* `helm show values bitnami/mysql`

### `helm list`

Lists the installed charts

![image-20240417100130240](./res/Cheat%20Sheet/image-20240417100130240.png)

### `helm uinstall <chart>`

Uninstalls the given chart.

## Prometheus

* `container_cpu_usage_seconds_total{namespace="default"}`
  Finds all `container_cpu_usage_seconds_total` object where `namespace` equals to `default`.
* `container_cpu_usage_seconds_total{namespace="default",name=""}[1m]`
  Returns a vector of results in the given time period
* `rate(container_cpu_usage_seconds_total{namespace="default",name=""}[1m])`
  Calculates the rate of change (the first derivation) in the last 1 minute
* `sum(container_memory_usage_bytes{namespace="default"}) by(pod)`
  This sums up the memory usage and groups it by the `pod` names. Additional columns can be specified in `by (pod, namespace, ...)`

The `~` means that the following expression is a regex. Thus `field =~ "regex"`, filters if `field` matches the regex. On the other hand `field !~ "regex"`, filters if the `field` does not match the `regex`. 
