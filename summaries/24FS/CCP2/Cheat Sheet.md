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