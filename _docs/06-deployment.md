# Deployment

## Deployment in IIS

If deploying to server root, use:

`ng build`

If deploying to a sub-directory under server root, use:

`ng build --base-href /ngLearn/`

The `--base-href` option changes the `<base href="/">` element in the generated `index.html` file.
The default (without `--base-href`  option, generates `<base href="/">`
With `--base-href ngLearn`          option, generates `<base href="ngLearn">`
With `--base-href /ngLearn/`        option, generates `<base href="/ngLearn/">`

So, yeah, the value provide seems to be directly replaced.

### Add support for deep-linking

Deep-linking allows user to navigate directly to a page by typing the route into the address bar instead of using the Angular routing.
For traditional (file-based) web-servers, this is a problem because it typically finds the resource (file) indicated by URL to return to requestor.
But in Angular application, the resource is "virtual" and therefore the user receives a 404 response.
The solution is for the server to always return the root of the application, even if the user requests a path within the application.


IIS Required extension modules:

    1.  Url Rewrite
        Download from: https://www.iis.net/downloads/microsoft/url-rewrite

```web.config
<configuration>
<system.webServer>
  <rewrite>
    <rules>
      <rule name="ngLearn Angular route all requests to application root" stopProcessing="true">
        <match url=".*" />
        <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
        </conditions>
        <action type="Rewrite" url="/ngLearn/" />
        <!--<action type="Rewrite" url="/" />-->
        </rule>
    </rules>
  </rewrite>
</system.webServer>
</configuration>
```

Note: 
    If doing some sort of CI/CD, we might want to add `web.config` file to project assets in `angular.json file`: 

    ```projects > ngTutorialApp > architect > build > options
    "assets": [
        "projects/ng-tutorial-app/src/web.config",
        "projects/ng-tutorial-app/src/favicon.ico",
        "projects/ng-tutorial-app/src/assets"
    ]
    ```

