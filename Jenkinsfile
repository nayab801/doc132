

pipeline {
    agent any
    stages {
        stage('check out') {NODE_VERSION=8.11-slim Dockerfile01
            steps {
              checkout scm
            }
        }
         stage('Build Image') {
            steps {
              bat 'docker build -t NODE_VERSION=8.11-slim Dockerfile001.'
            }
        }
         stage('Tag Image') {
            steps {
               bat 'docker tag nginx_jenkins:latest nayab801/NODE_VERSION=8.11-slim'
            }
         }
        stage('Push Image') {
            steps {
               bat 'docker login -u nayab801 -p Rasool@801'
                bat 'docker push nayab801/NODE_VERSION=8.11-slim'
            }
        }
        stage ('Run Image') {
            steps {
            bat 'docker run --name nginx23 -p 7798:80 NODE_VERSION=8.11-slim'
          } 
      }
    }
    post { 
        aborted { 
            echo 'ABORTED'
        }
         success { 
            echo 'SUCCESS'
        }
         failure { 
            echo 'FAILURE'
        }
        changed { 
            echo 'FAILURE'
        }
    }
    
} 
