module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AKIAXRGWTTAPOD33SZUT'),
          secretAccessKey: env('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'),
          region: env('us-east-1'),
          params: {
              Bucket: env('vngle'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });