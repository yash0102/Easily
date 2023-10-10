function updateJob(id) {
    const result = confirm("Are you want to update this job ?");
    if(result){
        window.location.href = "/jobs/update/" + id;
    }
}