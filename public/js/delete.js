function deleteJob(id) {
    const result = confirm("Are you want to delete this job ?");
    if(result){
        fetch("/jobs/delete/" + id, {
            method: 'POST',
        }).then((res) => {
            if(res.ok){
                window.location.href = "/jobs";
            }
        })
    }
}