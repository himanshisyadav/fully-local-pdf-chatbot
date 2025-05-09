# 🏠 Fully Local Chat Over Documents on RCC Compute Nodes

![](/public/images/midway3_frontpage.png)

It's a Next.js app that reads the content of an uploaded PDF, chunks it, adds it to a vector store, and
performs RAG, all client-side. You can even run Ollama without internet access which is the case on Midway3 compute nodes. Run local! 

# Steps

Clone the repository and switch to `midway3-dev` branch.

Get on a compute node, ensure to use the `--exclusive` flag to avoid running into resource related issues. 

During the following, ensure that you are on the compute node. In each terminal, log into midway3 login node and then compute node that your job is running on. 

Conda `environment.yaml` file available to create own conda environment.

Start vercel locally using development mode deployment.

```bash
module load python/anaconda-2023.09
module load gcc/13.2.0
source activate /project/rcc/hyadav/vercel_ollama
npm run dev
```

In another terminal, start Ollama

```bash
OLLAMA_ORIGINS=http://localhost:3000 OLLAMA_HOST=127.0.0.1:11434 ollama serve
```

Open another terminal, run model to be used. Ensure to pull models on the login node which has internet and then export the `OLLAMA_MODELS` environment variable. 
```bash
export OLLAMA_MODELS=/project/rcc/hyadav/health_chatbot/ollama_files
OLLAMA_HOST=127.0.0.1:11434 ollama run mistral
```

Following steps from the login node, establish an SSH tunnel to ports `3000` and `11434`, where Vercel and Ollama are running, respectively.

```bash
ssh -L localhost:<login node port>:localhost:3000 midway3-<compute node number>
```

```bash
ssh -L localhost:<login node port>:localhost:11434 midway3-<compute node number>
```

Start Thinlinc, ensure you are on the same login node where the SSH tunnels were established. If not, establish tunnels again for the login node that Thinlinc lands on. 

Open a web browser of choice and access the app on `localhost:<login node port>`


