function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*.wagering.in.cld*") || shExpMatch(url, "*jira.tabcorp.com.au*") || shExpMatch(url, "*myconfluence.tabcorp.com.au*")) {
    return "SOCKS localhost:9876";
  } else if (shExpMatch(url, "*sts.tabcorp.com.au*")) {
  	return "SOCKS localhost:9876";
  } else {
    return "DIRECT";
  }
}
