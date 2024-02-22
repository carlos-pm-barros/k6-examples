# k6-examples
Repo developed to demonstrate the performance of the K6 tool in different types of performance tests. The entire project was created on the **MAC OS X** operating system, but with the information in the K6 installation and execution item, it is possible to use its full power on other operating systems.

## 
## What did I learn?

- Performance tests
- K6 tool
- Metrics
- Thresholds

### Project structure

> In the project folder structure we have the 5 types of performance tests covered in the training, with each folder created having the test scripts and the results obtained.

### Install K6 

- MacOS
  * using [homebrew](https://brew.sh/)
  * after installing homebrew run 
  ```bash 
    brew install k6
    ```
- Windows
  * using [chocolatey](https://chocolatey.org/)
  * after installing homebrew run 
  ```bash
    choco install k6
  ```
- Docker
  * using [docker desktop](https://www.docker.com/products/docker-desktop/)
  * after installing docker desktop run
  ```bash
    docker pull grafana/k6
    ```

### Using K6 tool

#### Create and initialize
| O.S. | Create and initialize a new script by command |
|--- |--- |
| Mac/Linux| k6 new | 
| Windows | docker run --rm -i -v ${PWD}:/app -w /app grafana/k6 init |
| Docker| docker run --rm -i -v $PWD:/app -w /app grafana/k6 new |

#### Run k6
| O.S. | Run k6 with the following command |
|--- |--- |
| Mac/Linux| k6 run script.js | 
| Windows | cat script.js **[type the pipe symbol here]** docker run --rm -i grafana/k6 run -" |
| Docker| docker run --rm -i grafana/k6 run - <script.js |


#### Add Virtual Users
| O.S. | Now run a load test with more than one virtual users|
|--- |--- |
| Mac/Linux| k6 run --vus 10 --duration 30s script.js| 
| Windows | cat script.js **[type the pipe symbol here]** docker run --rm -i grafana/k6 run --vus 10 --duration 30s - |
| Docker| docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <script.js |