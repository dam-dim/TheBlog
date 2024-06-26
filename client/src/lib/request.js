const request = async (url, method, data) => {
    const response = await fetch(url, { ...getOptions(data), method });

    if (response.status === 204) return {};

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

const getOptions = (data) => {
    const options = {};

    if (data) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(data);
    } else {
        return options;
    }

    const token = localStorage.getItem("token");

    if (token) {
        options.headers = { ...options.headers, "X-Authorization": token };
    }

    return options;
};

export const get = (url) => request(url, "GET");
export const post = (url, data) => request(url, "POST", data);
export const remove = (url) => request(url, "DELETE");
export const put = (url, data) => request(url, "PUT", data);
export const patch = (url, data) => request(url, "PATCH", data);
