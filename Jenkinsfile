pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }

        success {
            emailext (
                subject: "SUCCESS: Playwright Tests Passed - Build #${env.BUILD_NUMBER}",
                body: """
                    <h2>🎉 Playwright Tests Passed</h2>
                    <p>All tests passed successfully!</p>
                    <p><b>View Online Report:</b></p>
                    <a href="${env.BUILD_URL}playwright-report/">Open Playwright Report</a>
                    <br><br>
                    <p>The HTML report is also attached to this email.</p>
                """,
                mimeType: 'text/html',
                to: "samruddhisuryawanshi5@gmail.com",
                attachmentsPattern: "playwright-report/index.html"
            )
        }

        failure {
            emailext (
                subject: "❌ FAILED: Playwright Tests Failed - Build #${env.BUILD_NUMBER}",
                body: """
                    <h2>❌ Playwright Tests Failed</h2>
                    <p>One or more tests failed.</p>
                    <p><b>View Online Report:</b></p>
                    <a href="${env.BUILD_URL}playwright-report/">Open Playwright Report</a>
                    <br><br>
                    <p>HTML report is attached for review.</p>
                    <p>Check Jenkins logs for details.</p>
                """,
                mimeType: 'text/html',
                to: "samruddhisuryawanshi5@gmail.com",
                attachmentsPattern: "playwright-report/index.html"
            )
        }
    }
}
