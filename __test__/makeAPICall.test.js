import { makeAPICall } from "../src/client/js/callAPI";
import 'regenerator-runtime/runtime';

describe('Make API Call', () => {
    test('Example API Call', async () => {
        const data = await makeAPICall('https://jsonplaceholder.typicode.com/todos/1');
        expect(data.title).toBe('delectus aut autem');
    })
})