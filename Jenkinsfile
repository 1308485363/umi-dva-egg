pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'docker build -t egg /var/jenkins_home/workspace/umi-dva-egg'
                sh 'docker stop umi-dva-egg'
                sh 'docker rm umi-dva-egg'
                sh 'docker run -d --net=host --name umi-dva-egg egg' 
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
