export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const p = url.searchParams.get('prompt');
        const tasks = [];

        let simple = {
            prompt: p
        };
        let response = await env.AI.run('@cf/meta/llama-3-8b-instruct', simple);
        tasks.push({ inputs: simple, response });

        return Response.json(tasks);
    }
};