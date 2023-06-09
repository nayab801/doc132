

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
              bat 'docker build -t node001 -f Dockerfile01  .'
            }
        }
         stage('Tag Image') {
            steps {
               bat 'docker tag node001 nayab801/node001'
            }
         }
        stage('Push Image') {
            steps {
               bat 'docker login -u nayab801 -p Rasool@801'
                bat 'docker push nayab801/node001'
            }
        }
        stage ('Run Image') {
            steps {
            bat 'docker run --name C1 -p 7798:3070 -d  node001'
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
