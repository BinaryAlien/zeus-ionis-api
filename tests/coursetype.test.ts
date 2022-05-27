import zeus from './index';

test('/coursetype', async () => {
    const res = await zeus.coursetype.all();
    expect(res.length).toBeGreaterThan(0);
});

test('/coursetype/{id}', async () => {
    let res = await zeus.coursetype.get(1);
    expect(res.type).toBe('CourseType.FollowUp');

    res = await zeus.coursetype.get(2);
    expect(res.type).toBe('CourseType.Exam');
});

test('/coursetype/{id}/usedby', async () => {
    let res = await zeus.coursetype.usedby(1);
    expect(res.length).toBeGreaterThan(0);

    res = await zeus.coursetype.usedby(-1);
    expect(res.length).toBe(0);
});
