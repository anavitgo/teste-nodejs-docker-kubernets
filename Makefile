build:
	docker build -f Dockerfile -t app_docker:0.2 .
run: build
	docker run -p 8080:3000 app_docker:0.2
run_mount: build
	docker run -p 8080:8080 --mount type=bind,source="$(pwd)/",target=/app/ app_docker:0.2