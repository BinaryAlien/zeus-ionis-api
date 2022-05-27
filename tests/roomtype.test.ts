import zeus from './index';

test('/roomtype', async () => {
    const res = await zeus.roomtype.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/roomtype/{id}', async () => {
    const res = await zeus.roomtype.get(1);
    expect(res.type).toBe('RoomType.Classroom');
});

test('/roomtype/{id}/usedby', async () => {
    const res = await zeus.roomtype.usedby(1);
    expect(res.length).toBeGreaterThan(0);
});
