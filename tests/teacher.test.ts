import zeus from './index';

test('/teacher/public', async () => {
    const res = await zeus.teacher.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/teacher/{id}/schools', async () => {
    const res = await zeus.teacher.schools(1);
    expect(res.length).toBeGreaterThan(0);
});

test('/teacher/{id}/usedby', async () => {
    const res = await zeus.teacher.usedby(1);
    expect(res).toBeDefined();
});

test('/teacher/{id}/ics', async () => {
    const res = await zeus.teacher.ics(39);
    expect(res.length).toBeGreaterThan(0);
});
