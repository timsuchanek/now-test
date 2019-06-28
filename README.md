# now-test

On `npm install`, this downloads the `migration-engine` binary to ./
The same mechanism is used in the `prisma2` package.
It seems, that the binary for darwin is downloaded instead of linux.
Could it be that there is some caching problem?

Trying it out in docker:

```
docker run -it --entrypoint bash --rm -v "$PWD":/var/task lambci/lambda:nodejs8.10
echo "{}" | ./migration-engine
```
