package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Go app!\n")
}

func main() {
	log.Print("Go app server ready")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":50051", nil)
}
