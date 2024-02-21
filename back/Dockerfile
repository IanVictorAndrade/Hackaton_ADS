FROM openjdk:17-jdk-alpine
ENV TZ="America/Porto_Velho"
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]