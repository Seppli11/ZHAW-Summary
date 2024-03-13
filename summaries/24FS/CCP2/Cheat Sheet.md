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

```kubectl describe <object-type> <name>`

, where `<object-type>` is the type (e.g. `pod`, `service`, ...) and the `<name>` is the name