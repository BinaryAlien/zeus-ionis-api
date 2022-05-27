import zeus from './index';

test('/room', async () => {
    const res = await zeus.room.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/room/withpaging', async () => {
    const options = {PageNumber: 42, PageSize: 1};
    const res = await zeus.room.withpaging(options);

    expect(res.length).toBe(options.PageSize);
});

test('/room/{id}', async () => {
    const id = 1;
    const res = await zeus.room.get(id);

    expect(res.id).toBe(id);
});
22
test('/room/available', async () => {
    const res = await zeus.room.available({});
    expect(res).toBeDefined();
});

test('/room/available/all', async () => {
    const res = await zeus.room.available_all({});
    expect(res.length).toBeGreaterThan(0);
});

test('/room/{id}/usedby', async () => {
    const res = await zeus.room.usedby(4);
    expect(res.length).toBeGreaterThan(0);
});
