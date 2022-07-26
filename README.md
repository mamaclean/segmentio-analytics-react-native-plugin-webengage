# @segment/analytics-react-native-plugin-firebase

`DestinationPlugin` for [WebEngae](https://www.webengage.com). Wraps [`react-native-webengage`](https://github.com/WebEngage/react-native-webengage).

## Installation

You need to install the `segment-analytics-react-native-plugin-webengage` and its dependencies: `react-native-webengage`

Using NPM:
```bash
npm install --save segment-analytics-react-native-plugin-webengage react-native-webengage
```

Using Yarn:
```bash
yarn add segment-analytics-react-native-plugin-webengage react-native-webengage
```

## Usage

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with an `WebEngagePlugin` instance. 

```ts
import { createClient } from '@segment/analytics-react-native';

import { WebEngagePlugin } from 'segment-analytics-react-native-plugin-webengage';

const segmentClient = createClient({
  writeKey: 'SEGMENT_KEY'
});

segmentClient.add({ plugin: new WebEngagePlugin() });
```

## Support

Please use Github issues, Pull Requests, or feel free to reach out to our [support team](https://segment.com/help/).

## Integrating with Segment

Interested in integrating your service with us? Check out our [Partners page](https://segment.com/partners/) for more details.
