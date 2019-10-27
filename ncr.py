import requests
import uuid

accountUrl = "http://ncrqe-qe.apigee.net/digitalbanking/db-accounts/v1/accounts"
transactionUrl = "http://ncrqe-qe.apigee.net/digitalbanking/db-transactions/v1/transactions"
recipientUrl = "http://ncrqe-qe.apigee.net/digitalbanking/db-recipients/v1/recipients"
transferUrl = "http://ncrqe-qe.apigee.net/digitalbanking/db-transfers/v1/transfers"

authorization = "Bearer qVQJtS0A3dBS0XAapGojDQ4Q3vg1"

headers = {
    'Authorization': authorization,
    'transactionId': str(uuid.uuid4()),
    'Accept': "application/json",
}

def getCustomerAccounts(hostUserId):
    querystring = {
        "hostUserId": hostUserId,
    }
    response = requests.request("GET", accountUrl, headers = headers, params = querystring)
    return response

def getAccount(hostUserId, accountId):
    queryString = {
        "hostUserId": hostUserId,
    }
    response = requests.request("GET", accountUrl + "/" + accountId, headers = headers, params = queryString)
    return response

def getTransactions(hostUserId, accountId):
    queryString = {
        "hostUserId": hostUserId,
        "accountId": accountId,
    }
    response = requests.request("GET", transactionUrl, headers = headers, params = queryString)
    return response

# def getRecipients(hostUserId):
#     queryString = {
#         "hostUserId": hostUserId,
#     }
#     response = requests.request("GET", recipientUrl, headers = headers, params = queryString)
#     return response

# def getRecipient(hostUserId, recipientId):
#     queryString = {
#         "hostUserId": hostUserId,
#     }
#     response = requests.request("GET", recipientUrl + "/" + recipientId, headers = headers, params = queryString)
#     return response

def createTransfer(fromAccountHolderId, fromAccountId, toAccountId, amount, memo):
    body = {
        "fromAccountHolderId": fromAccountHolderId,
        "fromAccountId": fromAccountId,
        "toAccountId": toAccountId,
        "memo": memo,
        "paymentOption": "DEFAULT",
        "amount": {
            "amount": amount
        },
    }
    print(body)



testAccountId = getCustomerAccounts("HACKATHONUSER037").json()["accounts"][0]["id"]
# testRecipientId = getRecipients("HACKATHONUSER037").json()["Recipients"][0]["id"]
# print(testRecipientId)
print(getCustomerAccounts("HACKATHONUSER037").text)
print()
print(getAccount("HACKATHONUSER037", testAccountId).text)
print()
print(getTransactions("HACKATHONUSER037", testAccountId).text)
print()
# print(getRecipients("HACKATHONUSER037").text)
# print()
# print(getRecipient("HACKATHONUSER037", testRecipientId).text)
# print()
print(createTransfer("24b369240a034da58e25aaff1a205508", "rf5ao6Qclwsth9OfOvUb-EeV1m2BfmTzUEALGLQ3ehU", "U1fgmemAI-KNjGpoZkKGnS1jNJZa_h222o9Dcmj9Yx0", 1.0))
