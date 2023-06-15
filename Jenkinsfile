
pipeline {
    agent any
    stages {
        stage('check out') {
            steps {
              checkout scm
            }
        }
         stage('docker-compose stop') {
             
            steps {
              sh 'docker-compose down'
            }
        }
        stages ('start up') {
            
            steps {
                sh 'docker-compose up -d'
            }
        }

        stages ('push images') {
            sh 'sudo docker login nayab801/ -p Rasool@801'
            sh 'sudo docker push nayab801/compose_nginx_build:latest'
            #// 'sudo docker push nayab801/compose_nginx_build:latest'
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
