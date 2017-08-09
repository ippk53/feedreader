/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
     /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {

        it('are defined and is not empty.', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('URL defined and URL is not empty.', function () {
            /*make sure allfeeds URL making sure its defined and not empty*/
            allFeeds.forEach(function (feed) {
                var feedUrl = feed.url;
                expect(feedUrl).toBeDefined();
                expect(feedUrl.length).not.toBe(0);
            });
        });
        it('Name is defined and not empty', function () {
            /*makesure all feeds name are defined and not empty*/
            allFeeds.forEach(function (feed) {
                allfeedsName = feed.name;
                expect(allfeedsName).toBeDefined();
                expect(allfeedsName.length).not.toBe(0);
            });
        });
    });
        /* A new test suite named "The menu" */
    describe('The menu', function () {
        it('is hidden.', function () {
        /* Ensures the menu element is hidden by default.
          */
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
         /* The menu changes visibility when the menu icon is clicked.
          */
        it('The menu changes visibility when the menu icon is clicked.', function () {
            $('a.menu-icon-link').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').click();
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });
     /*A new test suite named "Initial Entries" */
        /* the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function () {
       beforeEach(function(done) {
            loadFeed(1, done);
        });
        it('has a entry.', function () {
            /*check.entry for content*/
            expect( $('.feed .entry').length ).toBeGreaterThan(0);
            });
    });
     /* A new test suite named "New Feed Selection"
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function () {
        var oldContent;
        var newContent;
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldContent= $('.feed').html();
                loadFeed(1, function () {
                    newContent= $('.feed').html();
                    done();
            });
        });
    });
        it('content is changed successfully.', function () {
            expect(oldContent).not.toBe(newContent);

        });
    });
}());
