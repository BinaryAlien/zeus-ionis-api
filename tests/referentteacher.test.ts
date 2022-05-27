import zeus from './index';

test('/referentteacher', async () => {
    const res = await zeus.referentteacher.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/referentteacher/{id}', async () => {
    const id = 39;
    const res = await zeus.referentteacher.get(id);

    expect(res.id).toBe(id);
});
