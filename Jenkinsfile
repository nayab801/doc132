pipeline {
    agent any
    stages {
        stage('check out') {
            steps {
              checkout scm
            }
        }
         stage('Build Image') {
            steps {
              bat 'docker build -t nginx_jenkins .'
            }
        }
         stage('Tag Image') {
           
            steps {
               bat 'docker tag nginx_jenkins:latest nayab801/nginx_jenkins:latest'
            }
        }
        stage ('Run Image')
        steps {
            bat 'docker run --name nginx -p 7777:80 nginx_jenkins'
          } 
      }
        
         stage('Push Image') {
          
            steps {
               bat 'docker login -u nayab801 -p Rasool@801'
                bat 'docker push nayab801/nginx_jenkins:latest'
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
