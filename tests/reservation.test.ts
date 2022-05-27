import zeus from './index';

test('/reservation/withpaging', async () => {
    const options = {PageNumber: 42, PageSize: 1};
    const res = await zeus.reservation.withpaging(options);

    expect(res.length).toBe(options.PageSize);
});

test('/reservation/{id}', async () => {
    const res = await zeus.reservation.get(1);
    expect(res.name).toBe("Rentrée ING1 Promotion 2024");
});

test('/reservation/filter', async () => {
    const now = new Date();
    const res = await zeus.reservation.filter({
        startDate: now,
        endDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
        groups: [],
        teachers: [],
        rooms: []
    });

    expect(res.length).toBe(0);
});

test('/reservation/filter/displayable', async () => {
    const now = new Date();
    const res = await zeus.reservation.filter_displayable({
        startDate: now,
        endDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
        groups: [],
        teachers: [],
        rooms: []
    });

    expect(res.length).toBe(0);
});

test('/reservation/{id}/details', async () => {
    const res = await zeus.reservation.details(1);
    expect(res.name).toBe("Rentrée ING1 Promotion 2024");
});

test('/reservation/filter/withpaging', async () => {
    const now = new Date();
    const res = await zeus.reservation.filter_withpaging({
        startDate: now,
        order: "asc",
        groups: [],
        teachers: [],
        rooms: []
    });

    expect(res.length).toBe(0);
});

test('/reservation/byGroupName', async () => {
    const now = new Date();
    const res = await zeus.reservation.byGroupName({
        parentName: "X",
        groupName: "X",
        startDate: now,
        endDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    });

    expect(res.length).toBe(0);
});
