create:
	docker build . -t todolist_image
delete:
	docker rmi todolist_image
run:
	docker run -d -p 8080:8080 --rm --name todolist_container todolist_image
stop:
	docker stop todolist_container