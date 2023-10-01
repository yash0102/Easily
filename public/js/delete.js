function deleteProduct(id) {
    const result = confirm("Are you want to delete this product ?");
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