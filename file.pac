function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*github.tabcorp.com.au*") || shExpMatch(url, "*.wageringenvironment.in.cld*") || shExpMatch(url, "*.analytics.in.cld*") || shExpMatch(url, "*.wagering.in.cld*") || shExpMatch(url, "*jira.tabcorp.com.au*") || shExpMatch(url, "*myconfluence.tabcorp.com.au*") || shExpMatch(url, "*tabdigital.com.au*")) {
    return "SOCKS5 localhost:9876";
  } else {
    return "DIRECT";
  }
}
