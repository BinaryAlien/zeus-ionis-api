import zeus from './index';

test('/course', async () => {
    const res = await zeus.course.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/course/withpaging', async () => {
    const options = {PageNumber: 42, PageSize: 1};
    const res = await zeus.course.withpaging([], options);

    expect(res.length).toBe(options.PageSize);
});

test('/course/{id}', async () => {
    const res = await zeus.course.get(1);
    expect(res.code).toBe('maths');
});

test('/course/{id}/usedby', async () => {
    let res = await zeus.course.usedby(1);
    expect(res.length).toBeGreaterThan(0);

    res = await zeus.course.usedby(-1);
    expect(res.length).toBe(0);
});

test('/course/teacher/{idTeacher}', async () => {
    let res = await zeus.course.teacher(1);
    expect(res.length).toBeGreaterThan(0);

    res = await zeus.course.teacher(-1);
    expect(res.length).toBe(0);
});
