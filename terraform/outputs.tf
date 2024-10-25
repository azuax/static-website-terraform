output "bucket_name" {
  description = "Bucket name"
  value       = aws_s3_bucket.bucket.bucket_domain_name
}

output "cloudfront_url" {
  description = "CloudFront URL"
  value       = aws_cloudfront_distribution.distribution.domain_name
}
