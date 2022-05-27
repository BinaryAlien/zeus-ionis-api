import zeus from './index';

test('/School', async () => {
    const res = await zeus.School.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/School/{id}', async () => {
    const res = await zeus.School.get(1);
    expect(res.name).toBe('epita');
});

test('/School/usedby', async () => {
    const res = await zeus.School.usedby(1);
    expect(res.length).toBeGreaterThan(0);
});
