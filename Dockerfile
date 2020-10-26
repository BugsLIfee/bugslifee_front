FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} bugslife.jar
ENTRYPOINT ["java","-jar","/bugslife.jar"]