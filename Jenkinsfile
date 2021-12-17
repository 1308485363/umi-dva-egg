pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t egg --no-cache /var/jenkins_home/workspace/umi-dva-egg'
                sh 'docker stop umi-dva-egg | true'
                sh 'docker rm umi-dva-egg | true'
                sh 'docker run -d --net=host --name umi-dva-egg -v /root/logs:/root/logs egg'
                sh 'echo "************************************************ 查看docker容器情况: ************************************************"'
                sh 'docker ps -a'
            }
        }
        // stage('Deliver') { 
        //     steps {
        //         sh './jenkins/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //     }
        // }
    }
}
