# Benchmarks of JavaScript Package Managers

**Last benchmarked at**: _Oct 3, 2021, 2:45 AM_ (_daily_ updated).

This benchmark compares the performance of npm, pnpm, and Yarn (both regular and PnP variant).

Here's a quick explanation of how these tests could apply to the real world:

- `clean install`: How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no `node_modules` folder.
- `with cache`, `with lockfile`, `with node_modules`: After the first install is done, the install command is run again.
- `with cache`, `with lockfile`: When a repo is fetched by a developer and installation is first run.
- `with cache`: Same as the one above, but the package manager doesn't have a lockfile to work from.
- `with lockfile`: When an installation runs on a CI server.
- `with cache`, `with node_modules`: The lockfile is deleted and the install command is run again.
- `with node_modules`, `with lockfile`: The package cache is deleted and the install command is run again.
- `with node_modules`: The package cache and the lockfile is deleted and the install command is run again.
- `update`: Updating your dependencies by changing the version in the `package.json` and running the install command again.

## Lots of Files

The app's `package.json` [here](https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json)

| action  | cache | lockfile | node_modules| npm | pnpm | Yarn | Yarn PnP |
| ---     | ---   | ---      | ---         | --- | ---  | ---  | ---      |
| install |       |          |             | 49.2s | 18.5s | 23.1s | 29.4s |
| install | ✔     | ✔        | ✔           | 2.1s | 1.5s | 2.8s | n/a |
| install | ✔     | ✔        |             | 12.2s | 4.7s | 8.7s | 1.9s |
| install | ✔     |          |             | 17.2s | 8.1s | 14.6s | 7.5s |
| install |       | ✔        |             | 29.9s | 15.8s | 15.6s | 21.7s |
| install | ✔     |          | ✔           | 19.6s | 2s | 8.7s | n/a |
| install |       | ✔        | ✔           | 2.1s | 1.5s | 9.3s | n/a |
| install |       |          | ✔           | 20.4s | 7.1s | 15.6s | n/a |
| update  | n/a | n/a | n/a | 2.1s | 13.5s | 20.9s | 35.4s |

![Graph of the alotta-files results](../../static/img/benchmarks/alotta-files.svg)