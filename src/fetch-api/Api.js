import URLs from "./URLs";

async function connect({ url, options }) {
    const resquest = await fetch(url, options)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(`Status : ${res.status}`);
            }
        })
        .catch((erro) => {
            throw new Error(erro);
        });
    return resquest;
}

async function GET(url) {
    return await connect({ url: url, options:{method: 'GET' }});
}

async function POST(url, dataObject) {
    return await connect({ url: url, options:{method: 'POST', 
    headers: { 
        'Accept':'*' 
    }, 
    body:dataObject}}); 
}

async function DELETE(url, dataObject) {
    console.log(url);
    return await connect({ url: url, options:{method: 'DELETE', 
    headers: { 
        'Accept':'application/json',
        'Content-Type': 'application/json' 
    }, body:JSON.stringify(dataObject) }});
}

async function PUT(url, dataObject) {
    return await connect({ url: url, options:{method: 'PUT', 
    headers: { 
        'Accept':'*' 
    }, 
    body:dataObject}});   
}

export { URLs, GET, POST, DELETE, PUT };
