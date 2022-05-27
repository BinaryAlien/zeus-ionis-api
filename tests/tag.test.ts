import zeus from './index';

test('/tag', async () => {
    const res = await zeus.tag.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/tag/ofcourse/{id}', async () => {
    const res = await zeus.tag.ofcourse(1);
    expect(res).toBeDefined();
});
