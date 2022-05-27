import zeus from './index';

test('/group', async () => {
    const res = await zeus.group.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/group/withpaging', async () => {
    const options = {PageNumber: 42, PageSize: 1};
    const res = await zeus.group.withpaging(options);

    expect(res.length).toBe(options.PageSize);
});

test('/group/hierarchy', async () => {
    const res = await zeus.group.hierarchy();
    expect(res.length).toBeGreaterThan(0);
});

test('/group/{id}', async () => {
    const res = await zeus.group.get(1);
    expect(res.name).toBe("EPITA");
});

test('/group/{id}/children', async () => {
    const res = await zeus.group.children(1);
    expect(res.length).toBeGreaterThan(0);
});

test('/group/{id}/ics', async () => {
    let res = await zeus.group.ics(42);
    expect(res.length).toBeGreaterThan(0);
});

test('/group/ByCourseId', async () => {
    const res = await zeus.group.ByCourseId(1);
    expect(res.length).toBeGreaterThan(0);
});
