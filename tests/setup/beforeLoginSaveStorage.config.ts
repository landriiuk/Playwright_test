import { test } from '../../src/fixtures/base_fixture';
import { storageStatePath } from '../../src/links/path';

test('BEFORE check state', async ({ context }) => {
    await context.storageState({ path: storageStatePath });
});