import zeus from './index';

test('/location', async () => {
    const res = await zeus.location.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/location/hierarchy', async () => {
    const res = await zeus.location.hierarchy();
    expect(res.length).toBeGreaterThan(0);
});

test('/location/hierarchy/withrooms', async () => {
    let res = await zeus.location.hierarchy_withrooms();
    expect(res.length).toBeGreaterThan(0);
});

test('/location/{id}/rooms', async () => {
    const res = await zeus.location.rooms(4);
    expect(res.length).toBeGreaterThan(0);
});

test('/location/{id}', async () => {
    const res = await zeus.location.get(4);
    expect(res.name).toBe('rennes');
});

test('/location/{id}/children', async () => {
    const res = await zeus.location.children(4);
    expect(res.length).toBe(0);
});

test('/location/{id}/usedby', async () => {
    const res = await zeus.location.usedby(4);
    expect(res.length).toBeGreaterThan(0);
});
