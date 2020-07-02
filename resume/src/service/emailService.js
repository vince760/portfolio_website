import axios from "axios";

const sendEmail = (data) => {
    const config = {
        method: "POST",
        url: `${baseUrl}/timesheet?pageIndex=${pageIndex}&pageSize=${pageSize}&jobid=${jobId}&empid=${empId}`,
        xhrFields: {
            withCredentials: true,
        },
        data: data,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        },
    };

    return axios(config)
};

export {
    sendEmail
}