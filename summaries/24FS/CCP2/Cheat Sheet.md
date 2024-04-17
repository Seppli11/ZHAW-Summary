# Cheat Sheet

## Kubernetes

### `kubectl get`

`kubectl [-n <namespace>] get <obj> [-o wide] `,

where `<obj>` can be:

* `all` returns all objects
* `pods`
* `services`

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

### `kubectl create secrete`

`kubectl create secrete generic <name> [--from-literal=<key>=<value>]` 

Creates a new secrete with the `<name>` and the given key value. `--from-literal=...`  can be supplied multiple time.

### `kubectl delete serete <secrete-name>`

Deletes a secret with the given name

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

