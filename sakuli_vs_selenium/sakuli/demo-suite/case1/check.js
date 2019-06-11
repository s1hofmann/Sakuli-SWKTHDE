(async () => {
    const tc = new TestCase("demo_testcase");

    try {
        await _navigateTo("https://google.de");
        await _highlight(_link("About"), 200);
    } catch (e) {
        await tc.handleException(e);
    } finally {
        tc.saveResult();
    }
})().then(done);
