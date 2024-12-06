import * as axios from 'axios';
import { error } from 'console';
import * as fs from 'fs';
import { config } from 'process';

describe("HTTP Client", () => {
  // it("should be support by axios", async () => {
  //   const httpClient = axios.create({
  //     // configuration request
  //     timeout: 5000,
  //     baseURL:"https://webhook.site/e872ff0b-5084-4be0-913a-5f6d55cd9aa6"
  //   })
  //   it("should support GET method", async () => {
  //     const response = await httpClient.get("/")
  //     expect(response.status).toBe(200)
  //   })
  //   expect(httpClient).toBeDefined()
  // })

  describe("HTTP Methods", () => {
    const httpClient = axios.create({
      baseURL: "https://webhook.site/e872ff0b-5084-4be0-913a-5f6d55cd9aa6", // masukkan web test public
      timeout: 5000
    })

    // rqeuest interceptor

    httpClient.interceptors.request.use(
    async (config) => {
      console.log(`Send request to ${config.baseURL}${config.url}`)
      return config
    },
    async (error) => {
      console.error(`Error sending request: ${error.message}`)
      return Promise.reject(error)
    },
    {synchronous: false}
    )

    // response interceptor
    
    httpClient.interceptors.response.use(
      async (response) => {
        const fullUrl = response.config.baseURL + response.config.url
        const body = JSON.stringify(response.data)
        console.log(`Received response from ${fullUrl} with ${body}`)
        return response
      },
      async (error) => {
        console.error(`Error receiving response: ${error.message}`)
        return Promise.reject(error)
      },
      {
        synchronous: false
      }
    )

    it("should support GET method with config", async () => {
      const response = await httpClient.get("/", {
        params: {
          name: "Han"
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
      expect(response.status).toBe(200)
      expect(response.data).toBe("OK")
      expect(response.data.success).toBe(true)
    })
    
    it("should support POST with JSON request body", async () => {
      const json = {
        name: "Han",
        password: "123456"
      }
      const response = await httpClient.post("/", json,{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      expect(response.status).toBe(200)
      expect(response.data).toBe("OK")
      expect(response.data.success).toBe(true)
    })

    it("should support POST with TEXT request body", async () => {
      const text = "Hello Text"
      const response = await httpClient.post("/", text,{
        headers: {
          "Content-Type": "text/plain",
          "Accept": "application/json"
        }
      })
      expect(response.status).toBe(200)
      expect(response.data).toBe("OK")
      expect(response.data.success).toBe(true)
    })

    it("should support POST with FORM request body", async () => {
      const json = {
        name: "Han",
        password: "123456"
      }
      const response = await httpClient.post("/", json, {
        headers: {
          "Content-Type": "www-form-urlencoded",
        }
      })
      expect(response.status).toBe(200)
      expect(response.data).toBe("OK")
      expect(response.data.success).toBe(true)
    })

    it("should support POST with MULTIPART request body", async () => {

      // untuk file form data
      const form = new FormData()
      form.append("name", "Han")
      form.append("password", "123456")

      // untuk file form data dengan file
      const data = fs.readFileSync("test.txt")
      form.append("file", new Blob(data), "test.txt")


      const response = await httpClient.post("/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      expect(response.status).toBe(200)
      expect(response.data).toBe("OK")
      expect(response.data.success).toBe(true)
    })
  })
})

// error handler
describe("Error Handler", () => {
  const httpClient = axios.create({
    baseURL: "https://hanhub.vercel.app",  // Add 'https://' before the domain
    timeout: 5000,
    validateStatus: status => { return status < 500 }
  });

  it("should error if 404 not found", async () => { 
    try {
      const response = await httpClient.get("/not-found");
      expect(response.status).toBe(404);
    } catch (error) {
      // If there's an error, handle it appropriately
      expect(error.response.status).toBe(404);
    }
  });
});
